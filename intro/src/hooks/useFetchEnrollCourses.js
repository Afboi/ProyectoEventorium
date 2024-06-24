import { useEffect, useState } from "react";

export const useFetchEnrollCourses = (id) => {
    const [info, setInfo] = useState([]);
    const [isLoadingEnrollCourses, setIsLoading] = useState(true);

    const getInfo = async () => {
        try {
            const response = await fetch(`http://eventoriumbackend.test/api/enrollCourse/${id}`)
            const infor = await response.json();
            setInfo(infor);
            console.log(infor);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching info: ", error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getInfo();
    }, []);

    return {
        info,
        isLoadingEnrollCourses
    };
};