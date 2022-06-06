@ECHO OFF
CALL ng build --output-path ../docs --base-href /BasicAngularApp/
COPY ..\docs\index.html ..\docs\404.html
REM On Windows, `ng` is `ng.cmd`; So we should use CALL 
REM (or else batch script just exit after running ng build)