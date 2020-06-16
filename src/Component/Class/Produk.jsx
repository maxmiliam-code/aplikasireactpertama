import React from 'react'
import './CSS/Produk.css';
class Produk extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock,
            sub: "Beli",
            status: "Tersedia",
            disabled : false
        }
    }

    ButtonBeli =() => {
        this.setState ({
            stock: this.state.stock -1
        })

        if(this.state.stock === 1){
            this.setState({
                status : "Habis",
                disabled : true
            })
        }
    }

    render() {
        return (
            <div className="box-stock">
                <h2>{this.props.nama}</h2>
                <img src="data:image/jpeg;base64,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" alt="" />
                <p><b>Rp. {this.props.harga}</b></p>
                <p>{this.state.stock}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
                <p>{this.state.status}</p>

            </div>
        )
    }
}

export default Produk;