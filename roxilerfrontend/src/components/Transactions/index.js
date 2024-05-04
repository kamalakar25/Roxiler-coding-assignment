import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const Transactions = (props) => {
  const { transactionsDetails, page, increment, decrement } = props;
  const { transactions, total } = transactionsDetails;
  const incrementPage = () => {
    increment();
  };
  const decrementPage = () => {
    decrement();
  };
  const renderTableData = () => {
    return (
      <>
        <div className="table-container shadow mb-1 rounded">
          <table>
            <thead>
              <tr>
                <th className="border-for-table-bottom">ID</th>
                <th className="border-for-table-left">Title</th>
                <th className="border-for-table-left">Description</th>
                <th className="border-for-table-left">Price</th>
                <th className="border-for-table-left">Category</th>
                <th className="border-for-table-left">Sold</th>
                <th className="border-for-table-left">Image</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((eachData) => (
                <tr key={eachData.id}>
                  <td className="border-for-table-top border-for-table-right">{eachData.id}</td>
                  <td className="border-for-table-top border-for-table-right">{eachData.title}</td>
                  <td className="border-for-table-top border-for-table-right text-start">{eachData.description}</td>
                  <td className="border-for-table-top border-for-table-right">{Math.round(eachData.price * 100) / 100}</td>
                  <td className="border-for-table-top border-for-table-right">{eachData.category}</td>
                  <td className="border-for-table-top border-for-table-right">{eachData.sold ? "True" : "False"}</td>
                  <td className="border-for-table-top ">
                    <img
                      src={eachData.image}
                      alt="product"
                      className="product-img"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination-container">
          <p>Page No: {page}</p>
          <div>
            <button
              type="button"
              onClick={incrementPage}
              disabled={page === Math.ceil(total.total / 10)}
            >
              Next
            </button>
            <span> - </span>
            <button type="button" onClick={decrementPage} disabled={page === 1}>
              Previous
            </button>
          </div>
          <p>Per Page: 10</p>
        </div>
      </>
    );
  };
  const renderNoData = () => {
    return (
      <div>
        <h1>No Transactions</h1>
      </div>
    );
  };
  return (
    <div>
      {transactions.length > 0 ? renderTableData() : renderNoData()}
    </div>
  );
};

export default Transactions;