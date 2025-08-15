import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateToProjects = () => {
    navigate("/projects");
  };

  const navigateToProjectPage = (id) => {
    navigate(`/projects/${id}`);
  };

  const navigateToSkill = (skill) => {
    navigate(`projects/${skill}`);
  };

  return {
    navigateToProjectPage,
    navigateToProjects,
    navigateToSkill,
  };

};