const Bank = () => {

    const schemes = [
        {
            duration: 6,
            rate: 2
        },
        {
            duration: 12,
            rate: 5
        },
        {
            duration: 18,
            rate: 5.5
        },
        {
            duration: 60,
            rate: 6
        }
    ];

    const amt = 100000;

    return (
        <div>
            Welcome to Chuha Bank! Choose a scheme and we shall tell you the maturity value
            <p>Amount = ₹{amt}</p>
            <table>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Duration</th>
                        <th>Rate % (per annum)</th>
                        <th>Maturity Value</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        schemes.map((val, ind) => {
                            return <tr key={ind} onClick={() => {
                                document.getElementById(`Scheme-btn-${ind}`).innerHTML = `₹${amt + amt * val.rate / 100}`;
                            }}>
                                <td>{ ind + 1 }</td>
                                <td>{ val.duration }</td>
                                <td>{ val.rate }%</td>
                                <td id={`Scheme-btn-${ind}`}></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Bank;