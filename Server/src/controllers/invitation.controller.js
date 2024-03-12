const Invitation = require("../models/invitation.model");
const InvitationService = require("../services/invitation.service");
const {
  generateEmailValidationMessage,
  generateInvitationEmail,
} = require("../utils/emailGenerators");
const emailSender = require("../utils/emailSender");

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
          project,
          role,
        });
        console.log(invitation);
        await emailSender(
          generateInvitationEmail(invitation._id, user.email, sender)
        );
        return res.status(201).json({ invitation });
      } else {
        return res.status(400).json({ message: "already invited" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  inviteToCollaboration = async (req, res) => {};
}
const service = new InvitationService(Invitation);
const invitationControllerInstance = new InvitationController(service);

module.exports = invitationControllerInstance;
