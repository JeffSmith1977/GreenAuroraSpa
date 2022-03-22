import React, { useState } from 'react';

import TableNav from './TableNav';

const NavigationList = props => {

    const [show, setShow] = useState(false);  
    
    const onClick = () => {
        setTimeout(() => {
            setShow(!show)
        }, 800);
    }

    return (

        <div className="list" style={{ width: '200px' }}>
            <div className="theme-config">
                <div className={show ? "theme-config-box show":"theme-config-box"}>
                    <div className="spin-icon" onClick={e => setShow(!show)}>
                        <p className="theme-text">
                            <span className="rotate bx bx-hot left"> 
                                <i className="bx bx-hot">
                                    <box-icon name='cart'></box-icon>
                                </i>
                            </span>
                        </p>
                    </div>
                    <div className="skin-settings">

                        <div className="title">
                            <span >Cart</span>
                            <br />
                        </div>

                        <div className="setings-item">
                            <table className="table  table-hover lf-sm-table" id="pdsTable">
                                <TableNav onClick={onClick} />
                            </table>
                        </div>

                        <div className="setings-item default-skin">
                            <span className="skin-name ">

                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}


export default NavigationList;
