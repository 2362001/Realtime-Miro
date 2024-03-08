import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useOrganization } from "@clerk/nextjs";
import useApiMutation from "@/hooks/useApiMutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutateFuntion, pending } = useApiMutation(api.board.createBoard);
  const handleCreateBoard = () => {
    if (!organization) return;
    console.log(organization);

    mutateFuntion({
      orgId: organization.id,
      title: "Title",
    })
      .then((id) => {
        console.log(id);
        toast.success("Board created");
        // router.push(`/board/${id}`);
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" height={110} width={110} alt="Empty" />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={handleCreateBoard} size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};
