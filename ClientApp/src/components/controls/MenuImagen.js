import React from 'react';

const MenuImagen = (props) => {

    const menus = [{
        img: 'FacialTreatments.png',
        title: "Facial Treatments",
        // subtitle: "Text Pending",
        url: "/products"
      },{
        img: 'Massages.png',
        title: "Massages",
        /* subtitle: "Text Pending", */
        url: "/massage"
      },{
        img: 'FacialWax.png',
        title: "Facial Wax",
        /* subtitle: "Text Pending" */
        url: "/FacialWax"
      },{
        img: 'BodyWax.png',
        title: "Body Wax",
        /* subtitle: "Text Pending" */
        url: "/BodyWax"
      }];

    const navegateTo = (url) => props.history.push({ pathname : url });  
      
    return (
        <div>
            <div className="container mt-20">
                <div className="row no-gutters">

                    {menus && menus.map((menu, index) => {

                        return <div key={index} className="col-lg-3 col-md-6" onClick={() => navegateTo(menu.url)}>
                            <div className="card card-menu">
                                <div className="card-img-menu">
                                    <img className="card-img-top" src={require(`../../Images/ImagenesMenu/${menu.img}`).default} alt="Card image cap" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{menu.title}</h5>
                                    <p className="card-text">{menu.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default MenuImagen;
