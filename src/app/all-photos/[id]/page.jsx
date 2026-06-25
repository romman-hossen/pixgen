import { GetData } from "@/lib/data";
import Image from "next/image";
import { Button, Card, Chip } from "@heroui/react";
import { FaHeart, FaDownload, FaCopy } from "react-icons/fa";
import { Divider } from "@heroui/divider";

const PhotosDataDetails = async ({ params }) => {
  const { id } = await params;

  const data = await GetData();

  const findData = data.find((d) => d.id == id);

  if (!findData) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold">Photo Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <Card className="p-6 border rounded-3xl shadow-lg">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Image Section */}
          <div className="relative w-full h-[600px]">
            <Image
              src={findData.imageUrl}
              alt={findData.title}
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Details Section */}
          <div className="space-y-6">

            <div>
              <Chip color="secondary">
                {findData.category}
              </Chip>

              <h1 className="text-4xl font-bold mt-3">
                {findData.title}
              </h1>
            </div>

            <div className="flex items-center gap-8">

              <div className="flex items-center gap-2">
                <FaHeart className="text-red-500" />
                <span>{findData.likes}</span>
              </div>

              <div className="flex items-center gap-2">
                <FaDownload />
                <span>{findData.downloads}</span>
              </div>

            </div>

            <Divider/>

            {/* Prompt */}
            <div>
              <h3 className="text-xl font-semibold mb-2">
                AI Prompt
              </h3>

              <div className="bg-default-100 p-4 rounded-xl">
                {findData.prompt}
              </div>

            </div>

            <Divider />

            {/* Information */}
            <div className="grid grid-cols-2 gap-5">

              <div>
                <p className="text-gray-500">Model</p>
                <h4 className="font-semibold">
                  {findData.model}
                </h4>
              </div>

              <div>
                <p className="text-gray-500">Resolution</p>
                <h4 className="font-semibold">
                  {findData.resolution}
                </h4>
              </div>

              <div>
                <p className="text-gray-500">Created At</p>
                <h4 className="font-semibold">
                  {new Date(
                    findData.createdAt
                  ).toLocaleDateString()}
                </h4>
              </div>

            </div>

            <Divider />

            {/* Tags */}
            <div>
              <h3 className="font-semibold text-lg mb-3">
                Tags
              </h3>

              <div className="flex flex-wrap gap-2">
                {findData.tags.map((tag) => (
                  <Chip
                    key={tag}
                    variant="flat"
                    color="primary"
                  >
                    #{tag}
                  </Chip>
                ))}
              </div>
            </div>

            <Divider />

            {/* Actions */}
            {/* <div className="flex gap-4">

              <Button
                color="primary"
                className="flex-1"
                size="lg"
              >
                Download Image
              </Button>

              <Button
                variant="bordered"
                size="lg"
              >
                <FaHeart />
              </Button>

            </div> */}

          </div>

        </div>

      </Card>

    </div>
  );
};

export default PhotosDataDetails;