import { useMutation } from "convex/react";
import { useState } from "react";

const useApiMutation = (mutationFC: any) => {
  const [pending, setPending] = useState(false);
  const apimutation = useMutation(mutationFC);
  console.log(mutationFC);
  const mutateFuntion = (payload: any) => {
    console.log(payload);
    
    setPending(true);
    return apimutation(payload)
    .finally(() => setPending(false))
    .then((result) => {
        console.log(result)
      return result;
    })
    .catch ((error) => {
      throw error;
    });
  };

  return {
    mutateFuntion,
    pending,
  };
};

export default useApiMutation;
