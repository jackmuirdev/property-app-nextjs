import connectDB from "@/config/database";

export const GET = async (req) => {
  try {
    await connectDB();

    return new Response(JSON.stringify({ message: "Hello World" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("An error occurred", { status: 500 });
  }
};