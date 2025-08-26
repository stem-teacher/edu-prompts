awk '
  /<<<FILE name=/ {
    match($0,/name=\"([^\"]+)\".*part=([0-9]+).*of=([0-9]+)/,m);
    f=m[1]; part=m[2]; total=m[3]; collecting=1; next;
  }
  /<<<END FILE>>>/ { collecting=0; print "" >> f; close(f); next; }
  { if (collecting) print $0 >> f }
' < streamed_output.txt
