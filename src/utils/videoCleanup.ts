import cron from "node-cron";
import fs from "fs";
import path from "path";

export const setupVideoCleanup = () => {
	cron.schedule(
		"*/5 * * * *",
		function () {
			// console.log("Running a job at 01:00 at America/Sao_Paulo timezone");

			const directories = ["public/videos", "public/converted"];

			directories.forEach((dir) => {
				fs.readdir(dir, (err, files) => {
					if (err) throw err;

					files.forEach((file) => {
						if (file !== ".gitkeep") {
							fs.stat(path.join(dir, file), (err, stat) => {
								if (err) throw err;

								const now = new Date().getTime();
								const endTime =
									new Date(stat.ctime).getTime() + 3600000;
								if (now > endTime) {
									fs.unlink(path.join(dir, file), (err) => {
										if (err) throw err;
										console.log(`Deleted ${file}`);
									});
								}
							});
						}
					});
				});
			});
		},
		{
			scheduled: true,
			timezone: "America/Sao_Paulo",
		}
	);
};
