import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProject } from "../../../../features/project/slice";
import SingleProjectHeader from "./SingleProjectHeader";

const SingleProject = () => {
  const { id } = useParams();
  const { activeProject } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      console.log(id, "hi");
      dispatch(getProject(id));
    }
  }, [id]);
  return (
    <div className="bg-white border-b">
      <SingleProjectHeader project={activeProject} />
    </div>
  );
};

export default SingleProject;
