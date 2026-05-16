
import { useNavigate } from 'react-router-dom';

const Membership = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Membership Plans</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Price</th>
            <th>Features</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic Plan</td>
            <td>$20 / month</td>
            <td>Gym access</td>
            <td><button onClick={() => navigate('/payment')}>Join</button></td>
          </tr>
          <tr>
            <td>Premium Plan</td>
            <td>$40 / month</td>
            <td>Gym + Pool access</td>
            <td><button onClick={() => navigate('/payment')}>Join</button></td>
          </tr>
          <tr>
          <td>Pro Premium Plan</td>
          <td>$500 / month</td>
          <td>Gym + Pool access+All sports Facilities</td>
          <td><button onClick={() => navigate('/payment')}>Join</button></td>
        </tr>
      </tbody>
    </table>
    </div >
  );
};

export default Membership;
