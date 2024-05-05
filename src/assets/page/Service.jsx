import { useEffect, useState } from "react";
import UpdateService from "../UpdateService";



const Service = () => {

    const [item, setitem] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setitem(data)
            })

    }, [])


    return (
        <div className="">

            <table className="table">

                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th> average_cost</th>
                        <th>location</th>
                        <th>seasonality</th>
                        <th>tourists_spot_name</th>
                    </tr>
                </thead>

                {
                    item.map(data => <UpdateService data={data} item={item} setitem={setitem}></UpdateService>)
                }

            </table>
        </div>
    );
};

export default Service;