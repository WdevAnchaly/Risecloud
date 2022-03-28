import styled from 'styled-components'

const Style = styled.article`
 html {
    --color-text: #fff;
    --bg-primary:  #3a3f41 ;
  }
.container {
    margin: 0 auto;
    ${'' /* padding : 5px 0; */}
}

.navbar{
    padding :0 !important;
}
a.header-btn {
    padding: 6px 20px;
    font-size: 12px;
    background-color: #25a9de;
    border-radius: 3px;
    color: #FFFFFF !important;
    display: inline-block;
    font-weight: 700;
    text-decoration: none !important;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out 0s;
    white-space: pre;
}
a.header-btn:hover {
background: #3db5e5;
    color: #FFFFFF;
    text-decoration: none;
}
a:after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    ${'' /* border-top: 4px dashed;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent; */}
    opacity: 1;
}
.cm-e-menu {
	background-color: transparent;
	position: relative;
	z-index: 1000;
	color: #fff;
    font-weight: 400;
	}
.cm-e-menu ul {
	margin: 0; padding: 0;
}
.cm-e-menu li {
	position: relative;
	white-space: nowrap;
	cursor: pointer;
	list-style: none;

	-webkit-transition: background-color ease-in 300ms;
	-moz-transition: background-color ease-in 300ms;
	-ms-transition: background-color ease-in 300ms;
	-o-transition: background-color ease-in 300ms;
	transition: background-color ease-in 300ms;
}
${'' /* .cm-e-menu li:hover {
	background-color: #3d3d3d;
} */}
.cm-e-menu ul li.topmenu a{
	color:#fff;
	text-decoration:none;
}
.cm-e-menu ul li.topmenu {
	display: inline-table;
    text-transform: uppercase !important;
	padding: .3em 2em;
}
.cm-e-menu .topmenu ul {
	display:none;
	position: absolute;
	border-radius: 4px;
	
}
.cm-e-menu li:hover > ul {
	display: table;
}
.cm-e-menu ul.submenu {
	top: 100%;
	 left: 0;
	 z-index: 1005;
    width: 100%;
	padding-top: .5em;
	padding-bottom: .5em;	
    text-transform: capitalize !important;
	border : .6px solid #ccc;
	background:#fff;
}
.cm-e-menu ul.submenu li a {
	color:#000;
}
.cm-e-menu ul.submenu li:hover{
background :#e8e8e8;
}
.cm-e-menu ul.submenu .submenu {
	top: -.5em;
	left: 95%;
	background:#fff;
	z-index: 10010;
	font-size: 1em
}
li.small-text {
    font-size: 11px !important;
    padding-left: 23px !important;
}
li.small-text:hover{
	background:#fff;
}
.cm-e-menu ul.submenu li {
	padding: .2em 1.5em;
	font-size: .9rem;
	color:#000;
}
.cm-e-menu li.divider {
	padding: 0;
	border-top: 1px solid #ccc;
	margin: .5rem auto .3rem;
	cursor: default;
}
.cm-e-menu li.divider:hover {
	background-color: transparent;
}
.navbar {
    padding: 5px !important;
}
li.topmenu:after {
    content: "\f107";
    font-family:FontAwesome;
    padding-left: 5px;
}
`;
export default Style;