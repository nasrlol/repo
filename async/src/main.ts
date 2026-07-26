async function foo(): Promise<number>
{
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {

      if(false) {
	resolve(1); 
      } else {
	reject(new Error("daag")); 
      }

    }, 1000);
  });
}


async function main() 
{
  try {
    const result = await foo();
    console.log(result);
  } catch(error: Error) {
    console.log("tijd voor pauze");
  }
}


main();
