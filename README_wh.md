# stride-js-project-group-7 modifications per GIT Peer Review Activity

OBJECTIVE: Use GitHub repositories to manage and share repo.
Description:

    Working in pairs or a small group of up to 4 members to setup a public GitHub repository as the instruction below.
    Prepare talking points to discuss and provide feedback to other group's solution

    Navigate to [GitHub.com](http://github.com/)

    Links to an external site. using a web browser and create a free account by navigating the appropriate options provided.
    Following this, create a public repository with your group's name.
    Next, create a personal access token by navigating to user Settings, Developer settings, Personal access tokens. Copy and save this access token for later use.
    Go to your local machine, change the current working directory to your local project where you save your CC2 Web design hackathon project and push the contents of the local repo to GitHub.

Peers review:

Find the group you are associated with below and give them access to your repository. Your team will then review the other team's code and discuss as a team how you can improve it.  Then each person on the team must checkout the code and make an improvement to the code.  After you are done coding, commit the changes.  Once both teams are done with all the code changes, both groups must meet together, show what changes were done to the website with a demo of the pages, and then demonstrate what was done to improve the code.

    Group 1 and Group 2
    Group 3 and Group 4
    Group 5 and Group 6
    Group 7 and Group 8  <--- Our Group(s)

When complete, send the github repository link below.
Reference:
Use this instruction [instruction](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git) as guideline how to add locally hosted code to GitHub
Use this instruction [instruction](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository) to grant access other team to your repository on GitHub

----- Modifications:
method: fork repo -> fetch -> make changes -> push to forked repo -> create pull request via github site
which differs from the instruction/direction above 'to grant access other team to your repository on GitHub'

a minor updates of the neo-impressionismIndex.html and its supporting .css:
    neo-impressionismIndex.html -
        line 98  - removed italics
        line 114 - adjusted from root /style to local directory ../style to enable access to the .js

    neo-impressionismIndex.css - 
        line 51 - limited image width to minimize distortion
        line 68 - flex limits

.gitignore - is just to keep out the Mac based .DS_Store file
README_wh.md - this file - description of assignment and changes