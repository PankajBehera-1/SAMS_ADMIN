import React from 'react'
import ResponsiveDrawer from '../../common/sidebar'
import TableProfessors from './tableProfessors'
import CardProfessors from './cardProfessors'

const ViewProfessors = () => {
    return (
        <>
            <ResponsiveDrawer />
            <CardProfessors/>
            <TableProfessors/>
        </>
    )
}
export default ViewProfessors;