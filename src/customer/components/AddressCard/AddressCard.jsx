import React from 'react'

export default function AddressCard({address}) {
  return (
    <div>
      {/* <h1 className="text-lg font-semibold py-4">Delivery Adress</h1> */}
      <div className="space-y-3">
        <p className="font-semibold">{address?.firstName+" "+address?.lastName}</p>

        <p>
       {address?.state},{address?.streetAddress},{address?.zipCode}
        </p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  )
}
