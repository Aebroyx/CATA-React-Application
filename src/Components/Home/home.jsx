import React from "react";
import cataLogo from "../../catalogo.svg";

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-container">
            <div className="header">Selamat datang,</div>

            <div className="name">Sangalabror Pujianto</div>

            <div className="image2">
                    <img src={cataLogo} />
                    </div>

            <div className="Content">

                <div className="footer">

                    <button type="button" className="btn">
                        "Pencari"
                    </button>
                    <p>untuk mencari catatan yang kamu butuhkan!</p>
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        "Pembagi"
                    </button>
                    <p>untuk membagikan catatan yang kamu miliki!</p>
                </div>

                </div>
            </div>
    }

}