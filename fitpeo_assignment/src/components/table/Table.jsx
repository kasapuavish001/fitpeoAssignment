import './Table.scss';
const data = [
    {
        id: '1',
        img: <img src="https://source.unsplash.com/C6oPXOatFD8" alt='image' style={{ width: 100 }} />,
        name: `Abstract 3D`,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, amet.",
        deadline: new Date(2020, 1, 15),
        stock: '32 in stock',
        price: '$45.66',
        totalsales: '20'
    },
    {
        id: '2',
        img: <img src="https://source.unsplash.com/WLUHO9A_xik/1600x900" alt='image' style={{ width: 100 }} />,
        name: `Random `,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, amet.",
        deadline: new Date(2020, 1, 15),
        stock: '32 in stock',
        price: '$45.66',
        totalsales: '20'
    },
    {
        id: '3',
        img: <img src="https://source.unsplash.com/WLUHO9A_xik/1600x500" alt='image' style={{ width: 100 }} />,
        name: `Text 3D`,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, amet.",
        deadline: new Date(2020, 1, 15),
        stock: '32 in stock',
        price: '$45.66',
        totalsales: '20'
    },
]


const Component = () => {

    return (
        <div className="tablewrap">
            <table className='table'>
                <thead>
                    <tr>
                        <th >Product Name</th>
                        <th >Stock</th>
                        <th >Price</th>
                        <th >Total Sales</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return (
                            <tr>
                                <td>
                                    {item.img}
                                    <div className="details">
                                        <p p className='name' > {item.name}</p >
                                        <p className='text'>{item.text}</p>
                                    </div >
                                </td >
                                <td >{item.stock}</td>
                                <td >{item.price}</td>
                                <td >{item.totalsales}</td>
                            </tr >
                        )
                    })}
                </tbody >
            </table >
        </div>
    );
};

export default Component;