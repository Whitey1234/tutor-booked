import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { AuthContext } from "../../components/Auth/AuthProvider";
import { envVars } from "../../config";

const MyTutors = () => {
  const [tutors, setTutors] = useState([]);
  const [editingTutor, setEditingTutor] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    axios
      .get(`${envVars.backend_origin}/addtutior`)
      .then((res) => {
        const myTutors = res.data.filter((tutor) => tutor.email === user.email);
        setTutors(myTutors);
      })
      .catch((err) => console.log(err));
  }, [user]);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      await axios.delete(`${envVars.backend_origin}/addtutior/${id}`);
      setTutors((prev) => prev.filter((t) => t._id !== id));
      Swal.fire("Deleted!", "Tutor has been removed.", "success");
    }
  };

  const handleUpdate = (tutor) => {
    setEditingTutor(tutor);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updated = {
      image: form.image.value,
      language: form.language.value,
      price: parseFloat(form.price.value),
      description: form.description.value,
      review: parseInt(form.review.value),
    };

    const res = await axios.patch(
      `${envVars.backend_origin}/addtutior/${editingTutor._id}`,
      updated
    );
    if (res.data.modifiedCount > 0) {
      Swal.fire("Updated!", "Tutor info has been updated.", "success");
      setEditingTutor(null);
      const newData = await axios.get(
        `${envVars.backend_origin}/addtutior`
      );
      setTutors(newData.data.filter((tutor) => tutor.email === user.email));
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">My Tutors</h2>
      {tutors.map((tutor) => (
        <div
          key={tutor._id}
          className="card shadow p-4 mb-4 bg-white border rounded"
        >
          <img
            src={tutor.image}
            alt="tutor"
            className="w-full h-48 object-cover rounded mb-2"
          />
          <h3 className="text-xl font-semibold">{tutor.name}</h3>
          <p className="text-sm text-gray-500 mb-1">{tutor.email}</p>
          <p>
            <strong>Language:</strong> {tutor.language}
          </p>
          <p>
            <strong>Price:</strong> ৳ {tutor.price}
          </p>
          <p>
            <strong>Description:</strong> {tutor.description}
          </p>
          <p>
            <strong>Review:</strong> {tutor.review || 0}
          </p>
          <div className="flex gap-4 mt-3">
            <button
              className="btn btn-sm btn-error"
              onClick={() => handleDelete(tutor._id)}
            >
              Delete
            </button>
            <button
              className="btn btn-sm btn-info"
              onClick={() => handleUpdate(tutor)}
            >
              Update
            </button>
          </div>
        </div>
      ))}

      {/* Modal for update */}
      {editingTutor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={handleUpdateSubmit}
            className="bg-white p-6 rounded-lg shadow-xl w-96 space-y-3"
          >
            <h3 className="text-xl font-bold">Update Tutor</h3>

            {/* Read-only fields */}
            <input
              type="text"
              readOnly
              defaultValue={editingTutor.name}
              className="input input-bordered w-full bg-gray-100"
            />
            <input
              type="text"
              readOnly
              defaultValue={editingTutor.email}
              className="input input-bordered w-full bg-gray-100"
            />

            {/* Editable fields */}
            <input
              type="text"
              name="image"
              defaultValue={editingTutor.image}
              className="input input-bordered w-full"
              placeholder="Image URL"
            />
            <input
              type="text"
              name="language"
              defaultValue={editingTutor.language}
              className="input input-bordered w-full"
              placeholder="Language"
            />
            <input
              type="number"
              name="price"
              defaultValue={editingTutor.price}
              className="input input-bordered w-full"
              placeholder="Price"
            />
            <textarea
              name="description"
              defaultValue={editingTutor.description}
              className="textarea textarea-bordered w-full"
              placeholder="Description"
            ></textarea>
            <input
              type="number"
              name="review"
              defaultValue={editingTutor.review || 0}
              className="input input-bordered w-full"
              placeholder="Review"
            />

            <div className="flex justify-between mt-4">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setEditingTutor(null)}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyTutors;
