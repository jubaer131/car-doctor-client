import Swal from 'sweetalert2'

const UpdateService = ({ data, item, setitem }) => {
    console.log(data)
    const { image, average_cost, location, seasonality,
        tourists_spot_name, travel_time, _id, status } = data

    const handledelete = id => {

        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/service/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"

                            });
                        }

                        const remaining = item.filter(tab => tab._id !== id)
                        setitem(remaining)
                    })


            }
        });
    }
    const handleupdate = id => {
        console.log(id)
        fetch(`http://localhost:5000/service/${id}`, {
            method: 'patch',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = item.filter(update => update._id !== id);
                    const upconfirm = item.find(update => update._id === id);
                    upconfirm.status = 'confirm'
                    const newbooking = [update, ...remaining]
                    setitem(newbooking)
                }
            })
    }

    return (
        <tbody>
            < tr >
                <th>
                    <label>
                        <button onClick={() => handledelete(_id)} className="btn">X</button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{average_cost}</div>
                            <div className="text-sm opacity-50">{location}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {seasonality}
                </td>
                <td>{tourists_spot_name}</td>
                <th>
                    {
                        status = 'confirm' ? <span className='text-green-400 font-bold'>confirmed</span> :
                            <button onClick={() => handleupdate(_id)} className="btn btn-ghost btn-xs">please confirm </button>
                    }

                </th>
            </tr >
        </tbody>
    );
};

export default UpdateService;