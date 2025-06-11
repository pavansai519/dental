import { StaticImageData } from "next/image";
import team_avatar_2_1 from "@/assets/img/home/IPS E Max.png"; 
import team_avatar_2_2 from "@/assets/img/home/IMPLANT PROSTHESIS.png"; 
import team_avatar_2_3 from "@/assets/img/home/IVOCLOR Zenostar.png"; 
import team_avatar_2_4 from "@/assets/img/home/CERCON.png"; 
import team_avatar_2_5 from "@/assets/img/home/MLS.png"; 
import team_avatar_2_6 from "@/assets/img/home/MLD ZIRCONIA.png"; 

interface TeamDataType {
  id: number;
  img: StaticImageData;
  name: string;
  job_title: string;
}[]

const TeamTwoData = [
  {
    id: 1, 
    img: team_avatar_2_1,
    name: "Rosalina D. Williamson",
    job_title: "IPS E-Max",
  },
  {
    id: 2, 
    img: team_avatar_2_2,
    name: "Diconda PIran Will",
    job_title: "IMPLANT PROSTHESIS",
  },
  {
    id: 3, 
    img: team_avatar_2_3,
    name: "Hulk M. Kenbon",
    job_title: "IVOCLOR ZENOSTAR",
  },
  {
    id: 4, 
    img: team_avatar_2_4,
    name: "Haliam Z. Dicolaz",
    job_title: "CERCON",
  },
  {
    id: 5, 
    img: team_avatar_2_5,
    name: "Nicolas D. Case",
    job_title: "MLS",
  },
  {
    id: 6, 
    img: team_avatar_2_6,
    name: "Phumdon H. Norman",
    job_title: "MLD ZIRCONIA",
  },
  {
    id: 7, 
    img: team_avatar_2_1,
    name: "Hulk M. Kenbon",
    job_title: "IPS E-MAX",
  },
  {
    id: 8, 
    img: team_avatar_2_2,
    name: "Haliam Z. Dicolaz",
    job_title: "IMPLANT PROSTHESIS",
  },
]

export default TeamTwoData