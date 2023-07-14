import { Song } from "@/types";
import usePlayer from "@/hooks/use-player";
import useAuthModal from "@/hooks/use-auth-modal";
import { useUser } from "@/hooks/use-user";
import useSubscribeModal from "@/hooks/use-subscribe-modal";

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const subscribeModal = useSubscribeModal();
  const { user, subscription } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen();
    }

    if (!subscription) {
      return subscribeModal.onOpen();
    }

    player.setId(id);
    player.setIds(songs.map((song) => song.id))
  };

  return onPlay;
};

export default useOnPlay;