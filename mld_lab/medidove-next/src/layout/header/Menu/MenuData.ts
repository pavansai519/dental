
interface MenuDataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus: {
      link: string;
      title: string;
  }[];
}[]

const MenuData: MenuDataType[] = [
  {
    id: 1,
    title: "HOME",
    link: "/home",
    has_dropdown: false, 
    sub_menus: [],
  },
  {
    id: 2,
    title: "ABOUT US",
    link: "/about",
    has_dropdown: false, 
    sub_menus: [],
  },
  {
    id: 3,
    title: "SERVICES +",
    link: "#",
    has_dropdown: true, 
    sub_menus: [
      { link: "/services/IPS_EMAX",                      title: "IPS EMAX",}, 
      { link: "/services/ZENOSTAR",                      title: "ZENOSTAR",}, 
      { link: "/services/IVOCLAR_PFM",                   title: "IVOCLAR PFM",}, 
      { link: "/services/CERCON_DENTSPLY",               title: "CERCON - DENTSPLY",}, 
      { link: "/services/ZIRCONIA_MLD_BRAND",            title: "ZIRCONIA - MLD BRAND",}, 
      { link: "/services/MLS",                           title: "MLS",}, 
      { link: "/services/IMPLANT_PROSTHESIS",            title: "IMPLANT PROSTHESIS",}, 
      { link: "/services/BLEACHING_TRAYS",               title: "BLEACHING TRAYS",}, 
      { link: "/services/NIGHT_GUARD",                   title: "NIGHT GUARD",}, 
      { link: "/services/3M_LAVA",                       title: "3M LAVA",},
    ],
  },
  {
    id: 4,
    title: "DENTIST +",
    link: "#",
    has_dropdown: true, 
    sub_menus: [
      { link: "/dentist/REQUEST_QUOTE",                   title: "REQUEST QUOTE",},  
      { link: "/dentist/DOWNLOAD_RX_FORM",                title: "DOWNLOAD RX FORM",},  
      { link: "/dentist/ONLINE_ORDER",                    title: "ONLINE ORDER",},  
      { link: "/dentist/ONLINE_BILL_PAYMENT",             title: "ONLINE BILL PAYMENT",},  
    ],
  }, 
  {
    id: 5,
    title: "PATIENT +",
    link: "#",
    has_dropdown: true, 
    sub_menus: [
      { link: "/patient/AUTHENTICATE_CASE",               title: "AUTHENTICATE CASE",},   
    ],
  }, 
  {
    id: 7,
    title: "CAREERS",
    link: "/career",
    has_dropdown: false, 
    sub_menus: [],
  },
  {
    id: 7,
    title: "CONTACT",
    link: "/contact",
    has_dropdown: false, 
    sub_menus: [],
  },
  {
    id: 8,
    title: "LOGIN",
    link: "/login",
    has_dropdown: false, 
    sub_menus: [],
  },
];
export default MenuData;
