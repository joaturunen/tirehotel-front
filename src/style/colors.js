/*
    primary: #0088c2
    inbox background: #E9EAEB
    white text: #F4F7FC
    bakcround: #F4F7FC
    blackText : #333
    darker text: #0000
    highlihgtin colour #C23A00 
    linearHeader: #0088c2 #006ea6
*/

//Head color
const headColor = "#004766";
const headColorShadow = "#006ea6";

//Box and Shadow
const boxColor = "#e9eaeb";
const boxShadow = "#D3D3D3";
const homeShadow = '#333';

//Shock color
const shockColor = "#C23A00";

//Shock color
const successColor = "#4C7609";

//Text color light
const textLight ='#F4F7FC';

const backgroundLight = '#F4F7FC'


//Pie-Chart taken
export const pieChartTaken = "#E52D38";
//Pie-Chart free
export const pieChartFree = "#65B731"; 

//Header color
export const headerColor = {
  'background': 'linear-gradient(to top, ' + headColor + ' 55%,' + headColorShadow  + ' 90%)'
};

//Grey box with shadow
export const boxShadowStyle = {
  'background': boxColor,
  'box-shadow': '5px 5px ' + boxShadow
};
export const boxShadowHome = {
  'background': homeShadow,
  'box-shadow': '5px 5px ' + homeShadow
};

//Grey box with shadow
export const boxColorLayot = {
  'background': boxColor,
  'borderRadius': '10px',
  'margin': '1rem'
};

//button style
export const buttonStyle = {
  'background': headColor, 
  'color': textLight,
  'border-radius':'10px',
  'box-shadow': '4px 4px ' + boxShadow,
  'margin': "0.5rem",
  'font-size': '15px'
};

//user signed in
export const userStyle={
  'color': textLight,
  'text-align': 'right'
}

//Homepage LinkStyle
export const LinkStyle={
  'text-decoration': 'none',
  'color': headColor
}

export const Customerdata = {
  'border': 'solid 2px' + headColor,
  'borderLeft': 'solid 10px' + headColor,
  'borderRadius': '0.2rem',
  'background': backgroundLight,
  'lineHeight': '70%'
};

export const Choice = {
  'background': headColor,
  'color': textLight,
  'padding': '0.3rem',
  'borderRadius': '0.2rem',
  'padding-top':'0'
};

export const ChoiceInWarehouse = {
  'background': shockColor,
  'color': textLight,
  'padding': '0.3rem',
  'borderRadius': '0.2rem',
  'padding-top':'0'
};

export const ChoiceRemove = {
  'background': shockColor,
  'color': textLight,
  'padding': '0.3rem',
  'borderRadius': '0.2rem',
  'padding-top':'0'
};
export const ChoiceRemoveBorder = {
  'border': 'solid' + shockColor,
  'borderWidth': 4,
  'padding-top':'0'
};

export const ChoiceWarehouse = {
  'background': successColor,
  'color': textLight,
  'padding': '0.3rem',
  'borderRadius': '0.2rem',
  'padding-top':'0'
};

export const ChoiceToWarehouse = {
  'background': successColor,
  'color': textLight,
  'padding': '0.3rem',
  'borderRadius': '0.2rem',
  'padding-top':'0'
};
export const ChoiceToWarehouseBorder = {
  'border': 'solid' + successColor,
  'borderWidth': 4,
  'padding-top':'0'
};

export const full = {
  'color': pieChartTaken,
  'fontSize': '1.5rem',
  'marginRight': '0.5rem'
};

export const free = {
  'color': pieChartFree,
  'fontSize': '1.5rem',
  'marginRight': '0.5rem'
};


// Not sure why this must be
const Colors = () =>{
  return '';
};
export default Colors;
