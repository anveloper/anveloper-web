import { AND, WEB } from "data/dataConst";
import { ProjectType } from "data/dataTypes";

const ProjectList = () => {
  const projects: ProjectType[] = [
    {
      projectId: 0,
      projectName: "SSAFIT",
      projectType: WEB,
    },
    {
      projectId: 1,
      projectName: "당신의 계절",
      projectType: WEB,
    },
    {
      projectId: 2,
      projectName: "README",
      projectType: WEB,
    },
    {
      projectId: 3,
      projectName: "NAYA",
      projectType: AND,
    },
  ];
  return (
    <div>
      ProjectList
      {projects.map((item) => {
        return (
          <div key={item.projectId}>
            <h1>{item.projectName}</h1>
            <h2>{item.projectType}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
