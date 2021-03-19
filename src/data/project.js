import project1 from "../assets/project-images/chatbot-project.png";
import project2 from "../assets/project-images/d'syrikah-project.png";
import project3 from "../assets/project-images/hcis-project.png";
import project4 from "../assets/project-images/manajemen-asset-project.png";
import project5 from "../assets/project-images/pos-project.jpg";
import project6 from "../assets/project-images/sbs-project.jpg";
import project7 from "../assets/project-images/sistem-manajemen-project.jpg";
import project8 from "../assets/project-images/sistem-setoran-project.jpg";
import detailProject1 from "../assets/detail-project-images/Detail-Chatbot.png";
import detailProject2 from "../assets/detail-project-images/Detail-D'Syrikah.png";
import detailProject3 from "../assets/detail-project-images/Detail-HCIS.png";
import detailProject4 from "../assets/detail-project-images/Detail-Manajemen-Asset.png";
import detailProject5 from "../assets/detail-project-images/Detail-POS.png";
import detailProject6 from "../assets/detail-project-images/Detail-SBS.png";
import detailProject7 from "../assets/detail-project-images/Detail-Sistem-Manajemen.png";
import detailProject8 from "../assets/detail-project-images/Detail-Sistem-Setoran.png";

const data = [
  {
    id: 1,
    project_img: project1,
    project_detail_image: detailProject1,
    project_name: "Chatbot",
    project_category: "Website",
    project_description:
      "Applications used to reply to automatic messages if the user does not want to be disturbed",
    project_description_items: null,
  },
  {
    id: 2,
    project_img: project7,
    project_detail_image: detailProject7,
    project_name: "Sistem Manajemen",
    project_category: "Website",
    project_description:
      "The project is constructing a web based system management application. The system management app helps the user to define and display strength, dignity, opportunity, threat from its entity. Then the user can perform a risk assessment in the features of risk management. The next feature is OGSM, which serves to define Objectives, Goals, Strategy and Measures of user entity activity. So that with the application implementation Management system users can get an overview / road map in decision making, development, implementation, and corporate strategy. In this system management application has also implemented an organizational structure or leveling of the user. So that the Management system (SWOT, Risk Management, OGSM) can displayed cascading.",
    project_description_items: null,
  },
  {
    id: 3,
    project_img: project3,
    project_detail_image: detailProject3,
    project_name: "HCIS",
    project_category: "Website",
    project_description:
      "The project to build is the HCIS system, EHC needs it to manage various activities related to human resources through a centralized HCIS system, with HCIS, ehc can track information about employees, such as personal data, time permits, raimbuse and process of recruiting new employees. This HCIS system, based on web based, can also restrict anyone having access to this system, any information that employees, managers and EHC",
    project_description_items: null,
  },
  {
    id: 4,
    project_img: project4,
    project_detail_image: detailProject4,
    project_name: "Manajemen Aset",
    project_category: "Website",
    project_description:
      "Web-based applications that can be used to manage asset data. Through this application, asset data management can be done quickly and easily like asset identification, asset identification, asset condition, asset nullification to asset data statements. In addition, this application also provides asset data search features by various criteria. Asset data reports may be in export to PDF format or may be directly printed through printer sets.",
    project_description_items: null,
  },
  {
    id: 5,
    project_img: project5,
    project_detail_image: detailProject5,
    project_name: "POS",
    project_category: "Website",
    project_description:
      "A system used by a wide variety of retail businesses to complete transactions",
    project_description_items: null,
  },
  {
    id: 6,
    project_img: project8,
    project_detail_image: detailProject8,
    project_name: "Sistem Setoran",
    project_category: "Website",
    project_description:
      "The project that will be built is the deposit system, eoa club needs this system to make their business process more efficient, which is why they need deposits to support their business. The project is based on web based where there will be a confirmation form a deposit will be used and a dashboard deposit will verify the deposit from the member",
    project_description_items: null,
  },
  {
    id: 7,
    project_img: project2,
    project_detail_image: detailProject2,
    project_name: "D'Syrikah",
    project_category: "Website",
    project_description:
      "Syrikah is a partnership between two or more people working, with its benefits and losses Shared. The profit in the musings is also arranged, as is the case with the customers. Profits divided according to previous proportions, both sides assumed the risk of financial losses.",
    project_description_items: null,
  },
  {
    id: 8,
    project_img: project6,
    project_detail_image: detailProject6,
    project_name: "SBS Company Profile",
    project_category: "Website",
    project_description:
      "For more information on agent registration, kempability, marketing of plans and the company profile website, programs that explain pt SBS in itself, such as:",
    project_description_items: [
      { text: "Corporate Details" },
      { text: "Industrial Recognition" },
      { text: "Bussiness Details" },
    ],
  },
];

export default data;
