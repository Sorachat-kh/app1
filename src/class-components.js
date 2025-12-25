import React, {Component} from 'react'
 
export default class Calendar extends Component{
    getDate() {
        const dayNames = ['อาทิตย์','จันทร์','อังคาาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์']
        const monthNames = ['มกราคม','กุม๓าพนธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนาบน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม']
        const date = new Date()
        const weekDay = dayNames[date.getDay()]
        const day = date.getDate()
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear() +543
        return `วัน${weekDay} ที่ ${day} ${month} ${year}`
    }
    render() {
        return <div>{this.getDate()}</div>
    }
}