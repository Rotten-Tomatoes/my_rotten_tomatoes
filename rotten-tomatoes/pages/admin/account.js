import React from 'react'
import CreateAccount from '../../components/adminComponents/CreateAccount'
import DeleteAccount from '../../components/adminComponents/DeleteAccount'
import UpdateAccount from '../../components/adminComponents/UpdateAccount'



function Account(){
    return <div>
        <h1>Account admin management</h1>
        <CreateAccount/>
        <DeleteAccount/>
        <UpdateAccount/>
    </div>
}

export default Account