import LikeIcon from '../assets/images/like-icon.png';
import FirstFwIcon from '../assets/images/fast-forword-icon.png';
import DesignIcon from '../assets/images/design-icon.png';
import WritingIcon from '../assets/images/writing-icon.png';
import MapIcon from '../assets/images/map-icon.png';
import CallIcon from '../assets/images/call-icon.png';
import EmailIcon from '../assets/images/email-icon.png';
import CodeImg from '../assets/images/code.jpg';

const data = {
  services: {
    serviceCard: [
      {
        img: LikeIcon,
        title: 'Written with Love' ,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text'
      },
      {
        img: FirstFwIcon,
        title: 'Fast Turnaround' ,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text'
      },
      {
        img: DesignIcon,
        title: 'Up to Date' ,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text'
      },
      {
        img: WritingIcon,
        title: 'Premium Content' ,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text'
      },
    ]
  },
  contactIcon: [
    {
      icon: MapIcon ,
      address: `Gb road 123 londo, Uk`
    },
    {
      icon: CallIcon ,
      address: `+7123654897`
    },
    {
      icon: EmailIcon ,
      address: `demo@gmail.com`
    },

  ],
  blog: [
    {
      img: CodeImg ,
      date: '10 march 2020',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don"t look even slightly believable.'
    },
    {
      img: CodeImg ,
      date: '15 April 2020',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don"t look even slightly believable.'
    },
    {
      img: CodeImg ,
      date: '20 May 2020',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don"t look even slightly believable.'
    },
    {
      img: CodeImg ,
      date: '14 June 2020',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don"t look even slightly believable.'
    },
    {
      img: CodeImg ,
      date: '10 July 2020',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don"t look even slightly believable.'
    },
    {
      img: CodeImg ,
      date: '10 January 2021',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don"t look even slightly believable.'
    }
  ]
};

export default data;