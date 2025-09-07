@echo off
rem This batch file creates folders from PR16 to PR20.

echo Creating folders...

for /L %%i in (16,1,20) do (
    mkdir "PR%%i"
    echo Created folder: PR%%i
)

echo Done.
pause
