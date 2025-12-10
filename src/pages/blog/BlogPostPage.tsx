import { useParams } from "react-router-dom";
import { BLOG_CATEGORIES } from "./config";
import { Typography } from "@/components/ui/typography";

function BlogPostPage() {
  const { postId } = useParams<{ postId: string }>();

  // For now, use first category image as placeholder
  const categoryImage = BLOG_CATEGORIES[0]?.image;

  return (
    <div className="bg-[#060610] w-full h-full relative">
      <img src={categoryImage} className="w-full h-16 object-cover" />
      {/* Use grid for proper column layout */}
      <div className="flex justify-center">
        <div className="grid grid-cols-12 w-full gap-x-16 p-6 max-w-5xl">
          <div className="col-span-12">
            <Typography
              variant="h1"
              className="text-white mb-8"
              style={{
                fontSize: "8rem",
              }}
            >
              Post {postId}
            </Typography>
          </div>
          <div className="col-span-3 text-right">
            <Typography variant="caption">
              {new Date().toLocaleDateString()}
            </Typography>
            <Typography variant="caption" className="text-white text-lg font-semibold">
              Saving our cities one street a time
            </Typography>
          </div>
          <div className="col-span-7 flex items-center">
            <Typography variant="p" className="text-white text-md font-medium">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas.
              <br />
              <br />
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor
              sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
              vitae pellentesque sem placerat. In id cursus mi pretium tellus
              duis convallis. Tempus leo eu aenean sed diam urna tempor.
              Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor
              sit amet consectetur adipiscing elit.
              <br />
              <br /> Quisque faucibus ex sapien vitae pellentesque sem placerat.
              In id cursus mi pretium tellus duis convallis. Tempus leo eu
              aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec
              metus bibendum egestas. Iaculis massa nisl malesuada lacinia
              integer nunc posuere. Ut hendrerit semper vel class aptent taciti
              sociosqu. <br />
              <br />
              Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
              ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
              ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
              tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
              Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos. <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos.
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography variant="caption">Some content</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export { BlogPostPage };
