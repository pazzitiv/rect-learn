import React from 'react';
import './_header.scss';
import HeaderMenu from "../header-menu/header-menu";
import Index from "../../ui/logo";

type Props = {}

const logoString = 'Omega Project';

export default function Header(props: Readonly<Props>) {
    return (
        <header className="header">
            <div className='logo black'>
                <div className="logo__image">
                    <Index />
                </div>
                <div className="logo__text">
                    <span>{logoString}</span>
                </div>
            </div>

            <HeaderMenu/>

        </header>
    );
}
