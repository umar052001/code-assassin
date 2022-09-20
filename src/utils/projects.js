const mission_control = {
  title: "Mission Control System",
  githubUrl: "https://github.com/umar052001/Mission-Control-System",
  demoUrl: "http://65.0.100.53:8000/launch",
  shortDescription:
    "A web based mission control system to launch space mission",
  longDescription:
    "A web based mission control system to launch space mission using kepler exoplanets data from NASA and missions from SpaceX api.",
  tools: ["React", "JavaScript", "CSS", "HTML", "Node.js", "MongoDB"],
  image: "/assets/images/projects/mission_control.jpg",
  webpImage: "/assets/images/projects/mission_control.webp",
  key: 0,
};

const clothing_web = {
  title: "E-commerce Website",
  githubUrl: "https://github.com/umar052001/clothing-web",
  demoUrl: "https://clothing-web.netlify.app/",
  shortDescription: "A web based e-commerce website",
  longDescription: "A web based e-commerce website using REACT and Firebase.",
  tools: ["React", "Redux", "JavaScript", "CSS", "HTML", "Node.js", "Firebase"],
  image: "/assets/images/projects/e-commerce.jpg",
  webpImage: "/assets/images/projects/e-commerce.webp",
  key: 1,
};

const food_vision = {
  title: "Food Vision 101",
  githubUrl: "https://github.com/umar052001/Project_Food_101",
  demoUrl: "",
  shortDescription:
    "A deep learning image classification model using tensorflow.",
  longDescription:
    "A deep learnin image classification model using tensorflow and transfer learning trained on food101 dataset which beat the deep food paper.",
  tools: ["Python, TensorFlow, Keras, Matplotlib, Numpy"],
  image: "/assets/images/projects/food101.jpg",
  webpImage: "/assets/images/projects/food101.webp",
  key: 3,
};

// reverse array to ensure last projects added to array appear on top
export const featured_projects = [
  clothing_web,
  mission_control,
  food_vision,
].reverse();
