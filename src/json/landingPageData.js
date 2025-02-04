/* eslint-disable import/extensions */

// Services Img Imports
import Web from '../assets/images/Services/Web.png';
import Mobile from '../assets/images/Services/Mobile.png';
import Software from '../assets/images/Services/Software.png';

// Portfolio Img Imports
// import Recruiting from '../assets/images/Portfolio/Recruiting.png';
// import Stream from '../assets/images/Portfolio/Stream.png';
import Freelance from '../assets/images/Portfolio/Freelance.png';
// import Aura from '../assets/images/Portfolio/Aura.png';
import Surtido from '../assets/images/Portfolio/Surtido.png';
import ManagementApp from '../assets/images/Portfolio/ManagementApp.png';

// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// TeamMembers
import CEO from '../assets/images/TeamMembers/CEO.jpg';
import HRD from '../assets/images/TeamMembers/HRD.jpg';
import Finance from '../assets/images/TeamMembers/Finance.jpg';
import ProjectManager from '../assets/images/TeamMembers/Project-manager.jpg';
import Frontend1 from '../assets/images/TeamMembers/Frontend1.jpg';
import Frontend2 from '../assets/images/TeamMembers/Frontend2.jpg';
import Backend1 from '../assets/images/TeamMembers/Backend1.jpg';
import Backend2 from '../assets/images/TeamMembers/Backend2.jpg';
import Mobile1 from '../assets/images/TeamMembers/Mobile1.jpg';
import Mobile2 from '../assets/images/TeamMembers/Mobile2.jpg';
import UIUX1 from '../assets/images/TeamMembers/UIUX1.jpg';
import UIUX2 from '../assets/images/TeamMembers/UIUX2.jpg';

export const Services = [
  {
    title: 'Web Development',
    skill: 'MernStack',
    imageUrl: Web,
    animation: 'left',
  },
  {
    title: 'Mobile Development',
    skill: 'Flutter',
    imageUrl: Mobile,
    animation: 'up',
  },
  {
    title: 'Software Development',
    skill: 'Django',
    imageUrl: Software,
    animation: 'left',
  },
];

export const Portfolios = [
  {
    id: 'project1',
    title: 'Basavashree Souharda Co-operative Society Ltd, Zalaki',
    imageUrl: Freelance,
    type: 'Website',
    responsibility: [
      'Website development',
      'User  account creation and verification',
      'Loan application modules (vehicle, gold, mortgage loans)',
      'OTP and email authentication using Twilio API',
    ],
    credit: '', 
  },
  {
    id: 'project2',
    title: 'Laundry Website Project',
    imageUrl: ManagementApp,
    type: 'Website',
    responsibility: [
      'Web platform for laundry service management',
      'MERN stack development',
    ],
    credit: '',
  },
  {
    id: 'project3',
    title: 'E-commerce Projects',
    imageUrl: Surtido,
    type: 'Website',
    responsibility: [
      'Visually appealing and functional websites',
      'Internship at InternPE',
    ],
    credit: '',
  },
];

export const Advantages = [
  [{
    title: 'Innovative Solutions',
    description: 'We provide innovative technology solutions that cater to your specific business needs.',
    imageUrl: Communicative,
  },
  {
    title: 'Expertise',
    description: 'Our team of experts ensures high-quality and efficient project development across various domains.',
    imageUrl: Management,
  }],
  [{
    title: 'Customer-Centric Approach',
    description: 'We prioritize your needs and ensure that our solutions align perfectly with your business goals.',
    imageUrl: Collaborative,
  },
  {
    title: 'Proven Track Record',
    description: 'Our successful projects and satisfied clients demonstrate our ability to deliver results.',
    imageUrl: Favorite,
  }],
];

export const TeamMembers = [
  {
    name: 'Rach David',
    position: 'CEO',
    imageUrl: CEO,
  },
  {
    name: 'Pauline Sydney',
    position: 'HRD',
    imageUrl: HRD,
  },
  {
    name: 'Granger Watterson',
    position: 'Finance',
    imageUrl: Finance,
  },
  {
    name: 'Tom Jimmy',
    position: 'Project Manager',
    imageUrl: ProjectManager,
  },
  {
    name: 'Jim Hendrix',
    position: 'Front-end Developer',
    imageUrl: Frontend1,
  },
  {
    name: 'Calvin Max',
    position: 'Front-end Developer',
    imageUrl: Frontend2,
  },
  {
    name: 'Hawkins Jim',
    position: 'Back-end Developer',
    imageUrl: Backend1,
  },
  {
    name: 'Don Bizaro',
    position: 'Back-end Developer',
    imageUrl: Backend2,
  },
  {
    name: 'Bill Markinson',
    position: 'Mobile Developer',
    imageUrl: Mobile1,
  },
  {
    name: 'Igor Kavarov',
    position: 'Mobile Developer',
    imageUrl: Mobile2,
  },
  {
    name: 'Freddie Curl',
    position: 'UI/UX Designer',
    imageUrl: UIUX2,
  },
  {
    name: 'Monica Lovegood',
    position: 'UI/UX Designer',
    imageUrl: UIUX1,
  },
];
