import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { HeartIcon, MessageCircleIcon, ShareIcon } from "lucide-react";
import { Link } from "react-router-dom";

// FUTURE GOALS
// check language when adding posts - avoid vulgar language

const handleLike = () => console.log("Like clicked");
const handleComment = () => console.log("Comment clicked");
const handleShare = () => console.log("Share clicked");

interface UserAvatarProps {
  src: string;
  // fallback can be static
  fallback: string;
}
const UserAvatar = ({ src, fallback }: UserAvatarProps) => (
  <Avatar className="h-9 w-9">
    <AvatarImage src={src} alt="Avatar" />
    <AvatarFallback>{fallback}</AvatarFallback>
  </Avatar>
);

interface CardHeaderContentProps {
  title: string;
  timestamp: string;
}

const CardHeaderContent = ({ title, timestamp }: CardHeaderContentProps) => (
  <div className="ml-2">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-xs text-gray-500">Added: {timestamp}</p>
  </div>
);

interface CardMainContent extends React.PropsWithChildren {
  content: string;
}

const CardMainContent = ({ content, children }: CardMainContent) => (
  <CardContent>
    <p className="mb-4">{content}</p>
    {children}
  </CardContent>
);

interface CardImageProps {
  src: string;
  alt: string;
}
const CardImage = ({ src, alt }: CardImageProps) => (
  <img src={src} alt={alt} className="w-full h-48 object-cover border rounded-md" />
);

interface CardStatsProps {
  likes: number;
  comments: number;
}
const CardStats = ({ likes, comments }: CardStatsProps) => (
  // TODO: comments = new route comments with post id and then display comments
  <div className="text-sm text-gray-500 sm:ml-auto mb-1 mt-2 md:mt-0">
    {likes} Likes · <Link className="hover:underline hover:text-primary" to="/comments/id">{comments} Comments</Link>
  </div>
);

const CardActions = () => (
  // ?? each button separate component ?
  // TODO: if like button clicked - update db , show in ui, update number of likes
  // TODO: if/* utton clicked - go to new route - display the same card feed so make sure it is reusable - show all comments there and add an input to add a new one - ofc opdate number of comments in db and show in ui */


  <div className="mt-4">
    <Button className="pl-0 sm:px-2" variant="ghost" size="sm" onClick={handleLike}>
      <HeartIcon className="mr-2 h-5 w-5" /> Like
    </Button>
    <Button className="pl-0 sm:px-2" variant="ghost" size="sm" onClick={handleComment}>
      <MessageCircleIcon className="mr-2 h-5 w-5" /> Comments
    </Button>
    <Button className="pl-0 sm:px-2" variant="ghost" size="sm" onClick={handleShare}>
      {/* // todo: copy link from url to this post so it is sharable, show copy to clibboard or share options on mobile */}
      {/* // todo: investigate how to do it */}
      <ShareIcon className="mr-2 h-5 w-5" /> Share
    </Button>
  </div>
);

export function NewsFeed() {
  // todo: fetch data here
  // the question is db structure - is it one or more calls ( different places ) ?
  const fetchedData = {
    avatarSrc: "/placeholder-avatar.jpg",
    avatarFallback: "AI",
    feedTitle: "New board game released !!",
    feedContent:
      "Excited to announce our latest product launch! Check it out and let us know what you think.",
    timestamp: "01/02/2024",
    imageSrc: "/api/placeholder/400/300",
    imageAlt: "Product launch",
    likes: 125,
    comments: 15,
  };

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <div className="flex items-center">
          <UserAvatar src={fetchedData.avatarSrc} fallback={fetchedData.avatarFallback} />
          <CardHeaderContent
            title={fetchedData.feedTitle}
            timestamp={fetchedData.timestamp}
          />
        </div>
      </CardHeader>
      <CardMainContent content={fetchedData.feedContent}>
        <CardImage src={fetchedData.imageSrc} alt={fetchedData.imageAlt} />
      </CardMainContent>
      <CardFooter className="flex flex-wrap items-end">
        <CardActions />
        <CardStats likes={fetchedData.likes} comments={fetchedData.comments} />
      </CardFooter>
    </Card>
  );
}
