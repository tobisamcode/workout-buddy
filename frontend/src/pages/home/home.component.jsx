import React from "react";
import { useEffect } from "react";
import WorkoutDetails from "../../components/workout-details/workout-details.component";
import WorkoutForm from "../../components/workout-form/workout-form.component";
import { useWorkoutContext } from "../../hooks/useWorkoutContext";
import "./home.styles.scss";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: data });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
