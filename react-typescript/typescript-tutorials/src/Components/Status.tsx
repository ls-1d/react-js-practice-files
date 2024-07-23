type StatusProps = {
    status: 'loading' | 'success' | 'error';
};

export default function Status({ status }: StatusProps) {
    let message = '';
    if (status === 'loading') {
        message = 'Loading...';
    } else if (status === 'success') {
        message = 'Data Fetched Successfully';
    } else {
        message = 'Error fetching data';
    }

    return (
        <div>
            <h2>{message}</h2>
        </div>
    );
}
