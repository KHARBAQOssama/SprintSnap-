import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClipIcon from "../../../icons/ClipIcon";
import TrashIcon from "../../../icons/TrashIcon";
import AddImageIcon from "../../../icons/AddImageIcon";
import OutsideClickHandler from "../../../../widgets/OutsideClickHandler";
import { useNavigate } from "react-router-dom";
import { createTask } from "../../../../../features/project/slice";
import { closeModal } from "../../../../../features/appStatus/slice";
import PLIcon from "../../../icons/PLIcon";
const AddTaskModal = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [searchedMembers, setSearchedMembers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResults, setShowResults] = useState(false);
  const { activeProject, isSuccess } = useSelector((state) => state.project);
  const [task, setTask] = useState({
    project: activeProject._id,
    name: "",
    description: "",
    status: activeProject.task_status[0],
  });
  const selectMember = (member) => {
    setSelectedMembers([...selectedMembers, member]);
    setSearchedMembers(searchedMembers.filter((mem) => mem._id != member._id));
  };
  const removeMember = (member) => {
    const selectedMem = selectedMembers.filter((mem) => mem._id != member._id);
    setSelectedMembers(selectedMem);
    if (
      (member.first_name + member.last_name).toLowerCase().includes(searchValue)
    )
      setSearchedMembers([...searchedMembers, member]);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    setTeamMembers(activeProject?.team?.members);
    setSearchedMembers(activeProject?.team?.members);
  }, [activeProject]);
  useEffect(() => {
    const searchResults = teamMembers.filter((member) => {
      if (
        (member.first_name + member.last_name)
          .toLowerCase()
          .includes(searchValue) &&
        !selectedMembers.includes(member)
      )
        return member;
    });
    setSearchedMembers(searchResults);
  }, [searchValue]);
  useEffect(() => {
    console.log(searchedMembers);
  }, [searchedMembers]);

  const navigate = useNavigate();

  const [base64Strings, setBase64Strings] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newBase64Strings = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      const file = files[i];
      reader.readAsDataURL(file);

      reader.onload = () => {
        const base64String = reader.result;
        const mimeType = base64String.split(";")[0].split(":")[1];
        const fileType = mimeType.split("/")[1];
        console.log(fileType);
        const fileData = {
          type: fileType,
          name: file.name,
          base64: base64String,
        };
        newBase64Strings.push(fileData);
        if (newBase64Strings.length === files.length) {
          setBase64Strings([...base64Strings, ...newBase64Strings]);
        }
      };

      reader.onerror = (error) => {
        console.log(error);
      };
    }
  };
  const [images, setImages] = useState([]);
  const handleImageChange = (event) => {
    const files = event.target.files;
    const newBase64Strings = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      const file = files[i];
      reader.readAsDataURL(file);

      reader.onload = () => {
        // const base64String = reader.result;
        // const mimeType = base64String.split(";")[0].split(":")[1];
        // const fileType = mimeType.split("/")[1];

        // const fileData = {
        //   type: fileType,
        //   name: file.name,
        //   base64: base64String,
        // };
        newBase64Strings.push(reader.result);
        if (newBase64Strings.length === files.length) {
          setImages([...images, ...newBase64Strings]);
        }
      };

      reader.onerror = (error) => {
        console.log(error);
      };
    }
  };
  const handleRemoveImage = (index) => {
    setImages(images.filter((image, i) => i != index));
  };
  const handleRemoveFile = (index) => {
    setBase64Strings(base64Strings.filter((file, i) => i != index));
  };
  const handleSubmit = () => {
    const taskToSubmit = {
      ...task,
      files: base64Strings,
      assigned_to: selectedMembers,
      images,
    };
    dispatch(createTask(taskToSubmit));
    console.log(taskToSubmit);
  };
  useEffect(() => {
    if (isSuccess) dispatch(closeModal());
  }, [isSuccess]);

  return (
    <div>
      <div className="flex gap-3 items-center">
        <div
          className="h-6 w-6 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${activeProject.icon}')` }}
        ></div>
        <h1 className="font-semibold text-xl">Creating New Task</h1>
      </div>
      <div className="pt-4 flex gap-3">
        <div className="flex flex-col gap-3 flex-1">
          <input
            type="text"
            placeholder="Title"
            value={task.name}
            onChange={(e) => {
              setTask({ ...task, name: e.target.value });
            }}
            autoFocus
            className="outline-none text-xl font-semibold"
          />
          <textarea
            name=""
            id=""
            rows={4}
            value={task.description}
            onChange={(e) => {
              setTask({ ...task, description: e.target.value });
            }}
            className="flex-1 resize-none outline-none rounded-lg focus:bg-gray-50"
            placeholder="Description"
          ></textarea>
          {base64Strings.length != 0 && (
            <div>
              <p className="text-xs mb-2">attached files</p>
              <div className="flex flex-wrap max-w-[520px] gap-4">
                {base64Strings.map((file, index) => (
                  <div
                    key={index}
                    className="cursor-pointer rounded-tr flex flex-col items-center gap-2 bg-gray-50 shadow-lg p-2 px-3 relative max-w-[24ch] text-ellipsis whitespace-nowrap"
                    // onClick={() => {
                    //   window.location.href =
                    //     "http://localhost:3000/api/download/firebaseconfig.txt";
                    // }}
                  >
                    <PLIcon type={file.type} className={`h-8 w-8`} />
                    <span
                      title={file.name}
                      className="max-w-[10ch] overflow-hidden text-ellipsis whitespace-nowrap text-xs"
                    >
                      {file.name}
                    </span>
                    <button
                      onClick={() => handleRemoveFile(index)}
                      className="group hover:bg-red-500 absolute text-xs h-5 w-5 rounded-full top-0 right-0 translate-y-[-50%] translate-x-[50%] bg-red-100 flex items-center justify-center"
                    >
                      <TrashIcon
                        className={`h-3 w-3 fill-red-500 group-hover:fill-white`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {images.length != 0 && (
            <>
              <p className="text-xs">images</p>
              <div className="flex flex-wrap gap-2 bg-gray-100 max-w-[520px] p-2 rounded">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="h-[70px] w-[70px] bg-center bg-cover bg-no-repeat relative"
                    style={{ backgroundImage: `url('${image}')` }}
                  >
                    <button
                      className="group hover:bg-red-500 absolute text-xs h-5 w-5 rounded-full top-0 right-0 translate-y-[5%] translate-x-[-5%] bg-red-100 flex items-center justify-center"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <TrashIcon
                        className={`h-3 w-3 fill-red-500 group-hover:fill-white`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="flex items-center  gap-2 justify-end">
            <label
              htmlFor="images"
              className="p-2 py-1 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center gap-2 text-gray-500"
            >
              images
              <AddImageIcon className={"h-4 w-4"}></AddImageIcon>
            </label>
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="hidden"
            />
            <input
              type="file"
              id="files"
              accept=".docx, .xlsx, .pptx, .js, .html, .css, .pdf"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="files"
              className="p-2 py-1 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center gap-2 text-gray-500"
            >
              attach
              <ClipIcon className={"h-4 w-4"}></ClipIcon>
            </label>
          </div>
        </div>
        <div className="w-[320px] p-3 py-2 rounded-xl bg-gray-100">
          <h3 className="font-medium">Advanced settings</h3>
          <div className="max-h-[60vh] overflow-y-scroll">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500">assigned to</p>
              <div className="">
                <div className="">
                  {selectedMembers.length != 0 && (
                    <div className="py-2 flex gap-2 flex-wrap">
                      {selectedMembers.map((member, index) => (
                        <div className="p-1 rounded-lg px-2 flex items-center gap-3 bg-green-700 text-white">
                          <span key={index}>
                            {member.first_name + " " + member.last_name}
                          </span>
                          <span
                            className="cursor-pointer"
                            onClick={() => removeMember(member)}
                          >
                            x
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  <OutsideClickHandler
                    onOutsideClick={() => {
                      setShowResults(false);
                    }}
                  >
                    <input
                      placeholder="search a team member"
                      onFocus={() => setShowResults(true)}
                      type=""
                      className="w-full py-1 px-2 rounded-lg outline-none"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                    {showResults && searchedMembers != 0 && (
                      <div className="absolute mt-1 w-[295px] h-max overflow-y-scroll bg-white rounded-lg shadow p-2 flex flex-col gap-1">
                        {searchedMembers.map((member, index) => (
                          <span
                            onClick={() => selectMember(member)}
                            key={index}
                            className="py-1 hover:bg-blue-100 rounded px-2 cursor-pointer"
                          >
                            {member.first_name + " " + member.last_name}
                          </span>
                        ))}
                      </div>
                    )}
                  </OutsideClickHandler>
                </div>
              </div>
              {/* <select
                name=""
                id=""
                className="w-full py-1 px-2 rounded-lg outline-none"
              >
                {activeProject.team.members.map((member, index) => (
                  <option key={index} className="py-1">
                    {member.first_name + " " + member.last_name}
                  </option>
                ))}
              </select> */}
            </div>
            <div className="py-2 flex flex-col gap-2">
              <label htmlFor="" className="text-sm text-gray-500">
                status
              </label>
              <select
                name=""
                id=""
                value={task.status}
                onChange={(e) => {
                  setTask({ ...task, status: e.target.value });
                }}
                className="p-2 rounded-xl"
              >
                {activeProject.task_status.map((status) => (
                  <option>{status}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-2 ">
        <button
          className="p-1 px-5 rounded-lg bg-blue-500 text-white"
          onClick={handleSubmit}
        >
          save
        </button>
      </div>
    </div>
  );
};

export default AddTaskModal;
