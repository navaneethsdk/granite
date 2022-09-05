import React, { useState, useEffect } from "react";

import { useParams, useHistory } from "react-router-dom";

import tasksApi from "apis/tasks";
import Container from "components/Container";
import PageLoader from "components/PageLoader";

const Show = () => {
  const [task, setTask] = useState([]);
  const [assignedUser, setAssignedUser] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const { slug } = useParams();

  const history = useHistory();

  const updateTask = () => {
    history.push(`/tasks/${task.slug}/edit`);
  };

  const fetchTaskDetails = async () => {
    try {
      const {
        data: { task, assigned_user },
      } = await tasksApi.show(slug);
      setTask(task);
      setAssignedUser(assigned_user);
    } catch (error) {
      logger.error(error);
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    fetchTaskDetails();
  }, []);

  if (pageLoading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <h1 className="border-b mt-3 mb-3 border-gray-500 pb-3 pl-3 text-lg leading-5 text-gray-800">
        <span className="text-gray-600">Task Title : </span> {task?.title}
      </h1>
      <div className="bg-bb-env rounded mt-2 mb-4 px-2">
        <i
          className="transition duration-300ease-in-out ri-edit-line hover:text-bb-yellow cursor-pointer text-center text-2xl"
          onClick={updateTask}
        />
      </div>
      <h2 className="border-b mt-3 mb-3 border-gray-500 pb-3 pl-3 text-lg leading-5 text-gray-800">
        <span className="text-gray-600">Assigned To : </span>
        {assignedUser?.name}
      </h2>
      <h2 className="text-md text-bb-gray-600 mb-3 pb-3 leading-5 text-opacity-50">
        <span>Created By : </span>
        {task?.task_owner?.name}
      </h2>
    </Container>
  );
};

export default Show;
