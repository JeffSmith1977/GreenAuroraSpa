import React from 'react';
import { Link } from 'react-router-dom';

const TableNav = ({ onClick=undefined, fs='fs16' }) => {

    const navigation = [];

    return (
        <tbody>
            {navigation.map((link, key) => 
                <tr key={key}>
                    <td><Link onClick={onClick} className={`theme-link ${fs}`} to={link.pathname}><span className={`dx-icon-${link.icon}`}/>  {link.text}</Link></td>
                </tr>
            )}                                
        </tbody>
    );
}

export default TableNav;
