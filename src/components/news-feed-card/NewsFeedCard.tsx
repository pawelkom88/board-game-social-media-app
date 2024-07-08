import { HeartIcon, MessageCircleIcon, ShareIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export function NewsFeedCard() {
  return (
    <Card>
      <CardHeader className="flex items-center gap-4 font-heading">
        Avatar
        <div>
          <div className="font-semibold">Acme Inc</div>
          <div className="text-sm text-muted-foreground">@acmeinc · 2h</div>
        </div>
      </CardHeader>
      <CardContent>
        <p>
          Excited to announce our latest product launch! Check it out and let us know what
          you think.
        </p>
        <img
          src="/placeholder.svg"
          alt="Product image"
          className="mt-4 rounded-lg object-cover max-w-full"
        />
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <HeartIcon className="h-5 w-5" />
            <span className="sr-only">Like</span>
          </Button>
          <Button variant="ghost" size="icon">
            <MessageCircleIcon className="h-5 w-5" />
            <span className="sr-only">Comment</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShareIcon className="h-5 w-5" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
        <div className="text-sm text-muted-foreground">125 Likes · 15 Comments</div>
      </CardFooter>
    </Card>
  );
}
