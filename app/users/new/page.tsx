"use client";
import { useRouter } from "next/navigation";

const NewUserPage = () => {
    const router = useRouter();

    return (
        <div>
            <h1>New Users Page</h1>

            <button
                onClick={() => router.push("/users")}
                className='btn btn-primary'>
                Create
            </button>
        </div>
    );
};

export default NewUserPage;
