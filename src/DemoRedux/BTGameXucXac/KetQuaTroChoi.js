import React, { Component } from 'react'

export default class KetQuaTroChoi extends Component {
    render() {
        return (
            <div className="container text-center">
                <div className="display-4">
                    Bạn chọn : <span className="text-success">TÀI</span>
                </div>
                <div className="display-4">
                    Số bàn thắng : <span className="text-warning">0</span>
                </div>
                <div className="display-4">
                    Tổng số bàn chơi : <span className="text-pimary">0</span>
                </div>
                
            </div>
        )
    }
}