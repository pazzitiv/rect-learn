import React from "react";
import logo from "../../logo.svg";
import {Image} from "antd";

type Props = {};

const Logo :React.FC<Props> = (props) => (
    <Image src={logo} placeholder="logo"/>
);


export default Logo;
