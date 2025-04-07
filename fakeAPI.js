// fakeApi to play around with promises and async/await
export function fetchTaskData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { title: "Water plants", priority: "low" },
          { title: "Do homework", priority: "high" },
        ]);
      }, 1000);
    });
  }
  