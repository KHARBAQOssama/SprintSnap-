const { userSocketMap } = require("../config/socket.config");
const Invitation = require("../models/invitation.model");
const InvitationService = require("../services/invitation.service");
const {
  generateEmailValidationMessage,
  generateInvitationEmail,
} = require("../utils/emailGenerators");
const emailSender = require("../utils/emailSender");
const notificationControllerInstance = require("./notification.controller");

class InvitationController {
  service;
  constructor(Service) {
    this.service = Service;
  }
  create = async (req, res) => {
    const { user, project, role, sender } = req.body;
    try {
      const invitationExists = await this.service.getInvitation({
        user: user._id,
        project,
      });
      if (!invitationExists) {
        const invitation = await this.service.create({
          user: user._id,
          by: req.user._id,
          project,
          role,
        });
        // console.log(invitation);
        // await emailSender(
        //   generateInvitationEmail(invitation._id, user.email, sender)
        // );
        notificationControllerInstance.create({
          to: [user._id],
          by: req.user._id,
          project,
          type : "Invitation",
          context : invitation._id
        },req);
        return res.status(201).json({ invitation });
      } else {
        return res.status(400).json({ message: "already invited" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  getOne = async (req,res)=>{
    try {
      const {invitation} = req.params
      const existingInvitation =await this.service.getById(invitation);
      return res.status(200).json({invitation:existingInvitation})
      
    } catch (error) {
      return res.status(500).json({ message : 'something went wrong', error });
    }
  }
  confirm = async (req,res)=>{
    try {
      const {invitation} = req.params
      await this.service.confirm(invitation);
      return res.status(200).json({message : 'invitation confirmed successfully'})
    } catch (error) {
      return res.status(500).json({ message: "something went wrong", error });
    }
  }
  
  inviteToCollaboration = async (req, res) => {};
}
const service = new InvitationService(Invitation);
const invitationControllerInstance = new InvitationController(service);

module.exports = invitationControllerInstance;
