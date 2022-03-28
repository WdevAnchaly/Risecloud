import styled from "styled-components";

export const Style = styled.article`
section{
    padding : 30px 0;
}
.hero-section{
padding-top:90px;
}
a{
    text-decoration :none;
}
.hero_content .page_title{
    font-size: 38px;
    font-weight: 700;
    color: #2C2C2C;
   margin-bottom: 10px;
    padding: 0px;
    font-family: 'Inter', sans-serif;
}
.hero_content span{
    font-size:30px !important;
    font-family: 'Inter', sans-serif;
}
.fillBtn{
    border:#25a9de;
    background-color: #25a9de;
    border-radius: 5px;
    color: #FFFFFF !important;
    display: inline-block;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.1em;
    padding: 12px 25px;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out 0s;
    margin: 0px 20px 0px 0px;
}
.fillBtn:hover{
    background: #3db5e5;
    color: #FFFFFF;
    text-decoration: none;
}
.borderedBtn{
    border-radius: 5px;
    border: 2px solid #555555;
    color: #555555 !important;
    display: inline-block;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.1em;
    padding: 12px 25px;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out 0s;
    margin: 0px 20px 0px 0px;
}
.WhiteBtn{
    border: 2px solid #ffffff;
    color: #ffffff !important;
}
.borderedBtn:hover{
    border: 2px solid #25a9de;
    color: #25a9de !important;
    text-decoration: none;
}
.text-26{
font-size: 26px;
}
.client img {
  filter: grayscale(100%);
}
.client img:hover {
  filter: grayscale(0%);
}
.awsing img {
    height: 90px;
}
.notic h4{
    font-weight: 700;
    font-size: 28px;
}
.sub_section h2:after {
    content: "";
    border-bottom: 3px solid #25a9de;
    width: 10%;
    display: block;
    margin: 0 auto;
    margin-top: 12px;
}
.sub_section h4:after {
    content: "";
    border-bottom: 3px solid #25a9de;
    width: 80px;
    display: block;
    margin-top: 12px;
}
.w-32{
    width:33%;
}
li::marker {
    color: #faa61b;
}
.feature-list ul li{
    list-style: none;
    text-align: left;
}
.card_detail img {
    width: 241px;
    height: 125px;
}
.card_detail img {
    width: 125px;
    height: 125px;
}
.feature-list ul li:before {
    content: url(/assets/image/tick.svg);
    margin: 0px 15px 0px 0px;
}
.bg-img {
    background-image: url(./assets/image/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

`;